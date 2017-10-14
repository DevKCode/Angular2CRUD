export class User {

  name: string;
  username: string;
  email: string;
  job: string;
  country: string;

  constructor(name: string, user: string, email: string, job: string, country: string) {
      this.name = name;
      this.username = user;
      this.email = email;
      this.job = job;
      this.country = country;
  }


}
