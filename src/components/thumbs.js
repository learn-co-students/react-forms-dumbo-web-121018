class Humans {
  const twoThumbs = {person: { awesome: false }};
  const lessThumbs = {person: { awesome: false }};

  isAwesome(){
    this.filter(person => person.awesome === true)
  }

  findAwesomePeople = (object) => {
    return isAwesome(object);
  }

  makeAwesome = (object) => {
    if(/*awesome thing was done*/)
    {object.person.awesom === true}
  }

}
