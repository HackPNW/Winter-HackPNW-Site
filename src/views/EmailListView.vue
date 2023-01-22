<template>
  <div
    class="flex flex-col w-full px-2 md:px-8 pt-4 pb-20 items-center bg-[#e7f0ed]">
    <div
      class="flex self-start items-center text-[#238fa0] px-4 py-2 mb-4 bg-gray-300 bg-opacity-0 hover:bg-opacity-70 rounded-lg transition cursor-pointer"
      @click="goToHome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 mr-3">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
      <h1 class="font-semibold text-lg">Back to home</h1>
    </div>
    <h1
      class="text-5xl font-bold font-poppins underline decoration-[#238fa0] decoration-8 underline-offset-[12px]">
      Join The Mailing List
    </h1>

    <div class="flex justify-items-stretch gap-x-4 mt-12">
        <form-input
          text="First Name*"
          placeholder="John"
          :required="true"
          v-model="formData.firstName" />
        <form-input
          text="Last Name*"
          placeholder="Doe"
          :required="true"
          v-model="formData.lastName" />
      </div>
      <div class="w-96 pt-6">
        <form-input
          text="Email*"
          placeholder="john.doe@example.com"
          :required="true"
          v-model="formData.email" />
      </div>
     <button
      class="transition mt-8 rounded-full bg-red-500 py-3 px-6 text-white font-bold text-xl w-fit"
      @click="register"
      :class="{
        'bg-red-400': isSubmitting,
        'bg-red-200': errors.length != 0,
        'hover:bg-red-400': errors.length == 0,
      }">Submit</button>
  </div>

</template>

<script setup>
  import { reactive, computed, onMounted, ref } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import FormInput from "../components/FormInput.vue";
  import SelectionFormInput from "../components/SelectionFormInput.vue";
  import FormCheckbox from "../components/FormCheckbox.vue";
  import { useForm } from "vee-validate";
  import Turnstile from "@sexnine/cfturnstile-vue3";
  import * as yup from "yup"; // TODO: Optimize yup import
  import axios from "axios";

  const isSubmitting = ref(false);

  const router = useRouter();
  const route = useRoute();

  const inviteInfo = reactive({
    name: route.query.i,
    code: route.query.c,
  });
  const beenInvited = computed(() => {
    return Boolean(inviteInfo.name && inviteInfo.code);
  });

  const colorOptions = ["red", "amber", "green", "cyan", "violet", "pink"];
  const gradeOptions = ["9", "10", "11", "12"];

  const turnstileVerified = (token) => {
    formData.tsToken = token;
  };

  const setFavouriteColor = (color) => (formData.color = color);

  const registerFormFields = (fields, registerFunction) => {
    let ret = {};
    Object.keys(fields).forEach((x) => {
      ret[x] = registerFunction(x);
    });
    return reactive(ret);
  };

  const teamCodeInput = (e) => {
    if (e.data == null) return;

    if (formData.teamCode.length === 4) {
      formData.teamCode += "-";
    }
  };

  const formFields = {
    firstName: "",
    lastName: "",
    email: "",
    school: "",
    grade: "",
    color: "",
    github: "",
    createTeam: false,
    hasTeamCode: true,
    teamCode: "",
    teamName: "",
    fillTeam: true,
    restrictions: "",
    tsToken: "",
  };

  const formSchema = yup.object({
    firstName: yup.string().required().label("First Name"),
    lastName: yup.string().required().label("Last Name"),
    email: yup.string().required().email().label("Email"),
    school: yup.string().required().label("High School"),
    grade: yup
      .string()
      .oneOf(gradeOptions, "Grade cannot be empty")
      .label("Grade"),
    color: yup
      .string()
      .oneOf(colorOptions, "Favourite Color cannot be empty")
      .label("Favourite Color"),
    github: yup.string().matches(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, {
      message: "GitHub username is not valid",
      excludeEmptyString: true,
    }),
    createTeam: yup.bool().required(),
    hasTeamCode: yup
      .bool()
      .when("createTeam", { is: false, then: (x) => x.required() }),
    teamCode: yup
      .string()
      .label("Team Code")
      .when(["createTeam", "hasTeamCode"], {
        is: (createTeam, hasTeamCode) => !createTeam && hasTeamCode,
        then: (x) =>
          x.required().matches(/^\d{4}-\d{4}$/, "Team Code is not valid"), // TODO: backend check
      }),
    teamName: yup
      .string()
      .label("Team Name")
      .when("createTeam", {
        is: true,
        then: (x) =>
          x
            .required()
            .matches(
              /^[a-z\d ]*$/i,
              "Team name must only contain: letters, numbers and spaces"
            )
            .min(5)
            .max(20),
      }),
    fillTeam: yup.bool().when("createTeam", {
      is: true,
      then: (x) => x.required(),
    }),
    restrictions: yup.string(),
  });

  const {
    errors: formErrors,
    useFieldModel,
    handleSubmit,
  } = useForm({
    validationSchema: formSchema,
    initialValues: formFields,
  });

  const errors = computed(() => Object.values(formErrors.value));

  const formData = registerFormFields(formFields, useFieldModel);

  const goToHome = () => {
    router.push("/");
  };

  const goToMailingList = () => {
    router.push("/mailing")
  }

  const handleRegistered = (res, data) => {
    router.push({
      path: "/register/complete",
      query: { c: res.data.teamCode, i: data.firstName },
    });
  };

  const registrationError = (e) => {
    isSubmitting.value = false;
    alert(
      `Something went wrong, please try again :(\n\nError: ${e.response.data}`
    );
  };

  const register = () => {
    if (errors.value.length != 0) return;
    if (isSubmitting.value) return;

    isSubmitting.value = true;

    handleSubmit((data) => {
      axios
        .post("/api/register", data)
        .then((res) => handleRegistered(res, data))
        .catch(registrationError);
    })();

    router.push("/register");
  };

  onMounted(() => {
    if (beenInvited) {
      formData.teamCode = inviteInfo.code;
    }
  });
</script>
