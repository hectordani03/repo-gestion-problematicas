export async function userSeedData() {
  try {
    const response = await fetch("https://dummyjson.com/users?limit=100");
    const { users } = await response.json();

    const emailMap = new Map();

    return users.reduce((acc, user) => {
      const normalizedEmail = user.email.toLowerCase().trim();

      if (!emailMap.has(normalizedEmail)) {
        emailMap.set(normalizedEmail, true);
        acc.push({
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
          lastLoginIp: user.ip,
        });
      }

      return acc;
    }, []);
  } catch (error) {
    return [];
  }
}
