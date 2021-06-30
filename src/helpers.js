import { v4 as uuidv4 } from 'uuid';

const addId = (data) => {
  return data.map((el) => ({ ...el, id: uuidv4() }));
};

export default addId;
