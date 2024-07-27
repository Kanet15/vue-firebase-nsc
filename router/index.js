import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

import SignInView from "../views/SignIn.vue";
import HomeView from "../views/Home.vue";
import RegisterView from "../views/Register.vue";
import InOutDataView from "../views/InOutData.vue";
import Togglein from "../views/Togglein.vue";
import Toggleout from "../views/Toggleout.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignInView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/inoutdata",
      name: "inoutdata",
      component: InOutDataView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/togglein",
      name: "togglein",
      component: Togglein,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/toggleout",
      name: "toggleout",
      component: Toggleout,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }
});

export default router;
