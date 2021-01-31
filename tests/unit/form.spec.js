import { mount } from "@vue/test-utils";
import ElementPlus from "element-plus";
import FormComponent from "@/components/FormComponent.vue";

const wrapper = mount(FormComponent, {
  global: {
    plugins: [ElementPlus]
  }
});

test("empty form can not be submit", () => {
  expect(wrapper.get("button").trigger("click"));
});

test("form submit", async () => {
  const jsdomAlert = window.alert;
  window.alert = () => {};

  await wrapper.get("#name").setValue("NameTest");
  await wrapper.get("#surname").setValue("SurnameTest");
  await wrapper.get("#email").setValue("test@email.ru");
  await wrapper.get("#phone").setValue("+66666666666");
  await wrapper.get("#pass").setValue("Str0ng_Passw0rd");
  await wrapper.get("#checkPass").setValue("Str0ng_Passw0rd");

  await wrapper.get("form").trigger("submit");

  await expect(wrapper.emitted()).toHaveProperty("submit");
  window.alert = jsdomAlert;
});

test("can not be submit with incorrect email", async () => {
  await wrapper.get("#name").setValue("NameTest");
  await wrapper.get("#surname").setValue("SurnameTest");
  await wrapper.get("#email").setValue("sadsadasdas.ry");
  await wrapper.get("#phone").setValue("+66666666666");
  await wrapper.get("#pass").setValue("Str0ng_Passw0rd");
  await wrapper.get("#checkPass").setValue("Str0ng_Passw0rd");

  await wrapper.get("form").trigger("submit");

  await expect(wrapper.emitted()).toHaveProperty("submit");
});

test("can not be submit with incorrect phone", async () => {
  await wrapper.get("#name").setValue("NameTest");
  await wrapper.get("#surname").setValue("SurnameTest");
  await wrapper.get("#email").setValue("sadsadasdas.ry");
  await wrapper.get("#phone").setValue("asdaad");
  await wrapper.get("#pass").setValue("Str0ng_Passw0rd");
  await wrapper.get("#checkPass").setValue("Str0ng_Passw0rd");

  await wrapper.get("form").trigger("submit");

  await expect(wrapper.emitted()).toHaveProperty("submit");
});
