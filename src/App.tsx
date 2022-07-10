import { faker } from "@faker-js/faker";
import BasicTable from "./components/Table";
import { useState } from "react";
import { UserDataType } from "./types/UserDataType.type";

const App = () => {
  const [userData, setUserData] = useState<UserDataType[]>([]);

  const generateFakeData = async () => {
    let tempData: UserDataType[] = [];

    for (let i = 1; i <= 26; i++) {
      const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        dob: faker.date.birthdate().toLocaleDateString(),
        phone: faker.phone.number("###-####-###"),
        avatar: faker.internet.avatar(),
        country: faker.address.country(),
      };
      tempData.push(user);
    }
    setUserData(tempData);
  };

  if (userData.length === 0) generateFakeData();

  console.log(userData);

  return (
    <div>
      <BasicTable rows={userData}></BasicTable>
    </div>
  );
};

export default App;
