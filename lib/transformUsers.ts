import { Output } from "@/types/user";

export function transformUsers(users: any[]) {
  const result: Output = {};

  for (const user of users) {
    const dept = user.company.department;

    if (!result[dept]) {
      result[dept] = {
        male: 0,
        female: 0,
        minAge: Infinity,
        maxAge: -Infinity,
        ageRange: "",
        hair: {},
        addressUser: {},
      };
    }

    const group = result[dept];

    // gender
    if (user.gender === "male") group.male++;
    if (user.gender === "female") group.female++;

    // age range (O(1) update)
    group.minAge = Math.min(group.minAge, user.age);
    group.maxAge = Math.max(group.maxAge, user.age);

    // hair color grouping
    const color = user.hair.color;
    group.hair[color] = (group.hair[color] || 0) + 1;

    // address mapping
    const key = `${user.firstName}${user.lastName}`;
    group.addressUser[key] = user.address.postalCode;
  }

  // finalize ageRange
  for (const dept in result) {
    result[dept].ageRange = `${result[dept].minAge}-${result[dept].maxAge}`;
  }

  return result;
}