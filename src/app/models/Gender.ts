const validGenders : string[] = [
  'Male',
  'Female',
  'unknown',
  'n/a'
];

export class Gender {
  private gender: string;

  constructor(gender: string) {
    if (!validGenders.includes(gender))
      throw Error(`${gender} is not a valid gender.`);

      this.gender = gender;
  }

  toString() {
    return this.gender;
  }
}
