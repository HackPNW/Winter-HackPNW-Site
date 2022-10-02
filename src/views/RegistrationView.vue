<template>
  <div class="flex flex-col w-full px-2 md:px-8 py-4 items-center">
    <div
      class="flex self-start items-center text-red-500 px-4 py-2 mb-4 bg-gray-300 bg-opacity-0 hover:bg-opacity-70 rounded-lg transition cursor-pointer"
      @click="goToRegistration">
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
      class="text-5xl font-bold font-poppins underline decoration-red-500 decoration-8 underline-offset-[12px]">
      Register
    </h1>
    <div class="flex flex-col mt-12 w-full max-w-xl gap-y-4 p-6">
      <!-- START FORM -->

      <div class="flex justify-items-stretch gap-x-4">
        <form-input
          text="First Name"
          placeholder="John"
          :required="true"
          v-model="formData.firstName" />
        <form-input
          text="Last Name"
          placeholder="Doe"
          :required="true"
          v-model="formData.lastName" />
      </div>
      <div>
        <form-input
          text="Email"
          placeholder="john.doe@example.com"
          :required="true"
          v-model="formData.email" />
      </div>
      <div class="flex gap-x-4">
        <form-input
          text="High School"
          placeholder="Hacker High School"
          :required="true"
          v-model="formData.school" />
        <selection-form-input
          label="Grade"
          :options="gradeOptions"
          v-model="formData.grade"
          :required="true" />
      </div>
      <div>
        <form-input
          text="Github Profile"
          placeholder="https://github.com/0xEquinox"
          :required="false"
          v-model="formData.github" />
      </div>
      <p class="text-gray-700 text-sm font-bold mb-2">
        Pick your favorite color
      </p>
      <div class="flex gap-2 sm:gap-6">
        <button
          v-for="color in colorOptions"
          :key="color"
          class="rounded-full transition-all h-8 flex-1"
          :class="[
            `bg-${color}-500`,
            `shadow-${color}-500/100`,
            color == formData.color
              ? '-translate-y-2 shadow-md scale-[1.2]'
              : 'hover:-translate-y-0.5',
          ]"
          @click="setFavouriteColor(color)" />
      </div>

      <div class="flex justify-between px-1 py-1 rounded-md items-center mt-8">
        <button
          class="text-xl font-semibold px-2 py-1 rounded-md transition"
          :class="formData.createTeam ? '' : 'bg-red-500 text-white shadow-lg'"
          @click="formData.createTeam = false">
          Join a team
        </button>
        <p class="text-gray-600">or</p>
        <button
          class="text-xl font-semibold px-2 py-1 rounded-md transition"
          :class="formData.createTeam ? 'bg-red-500 text-white shadow-lg' : ''"
          @click="formData.createTeam = true">
          Create a team
        </button>
      </div>

      <!-- JOIN TEAM -->

      <form-checkbox
        text="I have a team and the team code"
        :checked="formData.hasTeamCode"
        @click="formData.hasTeamCode = true"
        v-if="!formData.createTeam" />
      <form-checkbox
        text="I do not have a team, please put me in one"
        :checked="!formData.hasTeamCode"
        @click="formData.hasTeamCode = false"
        v-if="!formData.createTeam" />

      <form-input
        text="Team code"
        placeholder="1234-5678"
        v-if="formData.hasTeamCode && !formData.createTeam"
        v-model="formData.teamCode" />

      <!-- CREATE TEAM -->

      <p class="text-gray-500 text-sm" v-if="formData.createTeam">
        <span class="font-bold text-gray-700">Note</span> <br />
        There is a maximum of 4 people per team. <br />
        If you are the only person in your team by the end of the registration
        period, you will be moved into a team with other people.
      </p>

      <form-input
        text="Team name"
        placeholder="The Super Cool Programmers"
        v-if="formData.createTeam"
        v-model="formData.teamName" />

      <p class="text-gray-700 font-bold text-sm" v-if="formData.createTeam">
        Are you okay with letting HackPNW put people without a team in your team
        if your team does not have 4 members by the end of the registration
        period?
      </p>
      <form-checkbox
        text="Yes, I'm okay with solo hackers joining my team"
        :checked="formData.fillTeam"
        @click="formData.fillTeam = true"
        v-if="formData.createTeam" />
      <form-checkbox
        text="No, I don't want anyone else joining my team"
        :checked="!formData.fillTeam"
        @click="formData.fillTeam = false"
        v-if="formData.createTeam" />

      <!-- END FORM -->
      <div>
        <p v-for="error in errors">
          {{ error }}
        </p>
      </div>
    </div>

    <button
      class="transition mt-8 rounded-full bg-red-500 hover:bg-red-400 py-3 px-6 text-white font-bold text-xl w-fit">
      Register
    </button>
  </div>
</template>

<script setup>
  import { reactive } from "vue";
  import { useRouter } from "vue-router";
  import FormInput from "../components/FormInput.vue";
  import SelectionFormInput from "../components/SelectionFormInput.vue";
  import FormCheckbox from "../components/FormCheckbox.vue";
  import { useForm } from "vee-validate";
  import * as yup from "yup"; // TODO: Optimize yup import

  const router = useRouter();

  const colorOptions = ["red", "amber", "green", "cyan", "violet", "pink"];
  const gradeOptions = ["9", "10", "11", "12"];

  const setFavouriteColor = (color) => (formData.color = color);

  const registerFormFields = (fields, registerFunction) => {
    let ret = {};
    Object.keys(fields).forEach((x) => {
      ret[x] = registerFunction(x);
    });
    return reactive(ret);
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
              /^[a-z\d ]*$/,
              "Team name must only contain: letters, numbers and spaces"
            )
            .min(5)
            .max(20),
      }),
    fillTeam: yup.bool().when("createTeam", {
      is: true,
      then: (x) => x.required(),
    }),
  });

  const { errors, useFieldModel } = useForm({
    validationSchema: formSchema,
    initialValues: formFields,
  });

  const formData = registerFormFields(formFields, useFieldModel);

  const goToRegistration = () => {
    router.push("/");
  };
</script>
