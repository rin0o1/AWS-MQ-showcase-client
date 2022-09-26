import axios from 'axios';

const END_POINT_GET_DEPTHS = 'http://9.20.193.145:8080/api/qdepth';
const END_POINT_PUT = 'http://9.20.193.145:8080/api/mqput';
const END_POINT_GET = 'http://9.20.193.145:8080/api/mqget?limit=';

class APIAdapter {
  async getAllDepths() {
    let result = undefined;
    try {
      let _result = await axios.get(END_POINT_GET_DEPTHS);
      result = _result.data;
    } catch (e) {
      console.log('Error on getting the queues info');
    }

    return result;
  }

  put(message, quantity) {
    axios({
      method: 'post',
      url: END_POINT_PUT,
      data: {
        message: message,
        quantity: quantity,
      },
    });
  }

  async getFromLimit(limit) {
    let result = undefined;
    try {
      let _result = await axios.get(END_POINT_GET + limit);
      result = _result.data;
    } catch (e) {
      console.log('Error on getting messages');
    }

    return result;
  }
}

export default APIAdapter;
