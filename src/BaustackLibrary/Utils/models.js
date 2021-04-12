import shortid from 'shortid';

const Library = {
  data: [],
  addGroup(title) {
    const instance = {
      title,
      data: [],
      add({title, description, features, exemple}){
        this.data.push({
          title,
          description,
          features,
          exemple,
          id: shortid.generate()
        })
      }
    }
    this.data.push(instance);
    return instance;
  }
}

export default Library