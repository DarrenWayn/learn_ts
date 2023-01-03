interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  /* startTrail: () => string; */
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
  /* getRadius(name: Array<string>): Radius; */
  getRadius(name: string[]): Radius;
}

interface User {
  githubToken?: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

type Radius = {
  radius: number;
  lang: number;
  lat: number;
};

const hitesh: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 2341,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh01", off: 1) => {
    console.log({ name, off });
    return 10;
  },
  getRadius: (test: ["darren", "lina", "tokyo"]) => {
    console.log(test);
    return {
      radius: 1232,
      lang: 995,
      lat: 3423,
    };
  },
};

hitesh.email = "h@hc.com";
/* hitesh.dbId = 33 */

export {};
