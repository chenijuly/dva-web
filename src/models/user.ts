import { Effect } from "dva"
import { Reducer } from "react"

export type UserPrivilege = {
  success: boolean;
}

export type UserModelType = {
  namespace: 'user';
  state: UserPrivilege;
  effects: {
    fetchUserPrivilege: Effect;
  },
  reducers: {
    fecthUserPrivilegeR: any; //Reducer<UserPrivilege>;
  }
}


const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    success: false
  },
  effects: {
    *fetchUserPrivilege(_, {call, put}) {
      // debugger
      const res = {
        data:{
          default: 'ddd'
        }
      }//yield call()

      yield put({
        type: 'fecthUserPrivilegeR',
        payload: res.data.default,
      });
    }
  },
  reducers: {
    fecthUserPrivilegeR(state, action) {
      const data = action.payload;
      console.log(data)
      return {
        ...state,
        success: false,
        data
      }
    }
  }
}

export default UserModel;