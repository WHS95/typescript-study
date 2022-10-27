{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name:"alex",
    age: 13,
  }

  /**
   * String Literal Types
   */
  type Name = 'name';
  const alex: Name = "name";
  type JSON = 'json';
  const json: JSON = "json"

  type Boal = true;
  const isCat: Boal = true;
}
