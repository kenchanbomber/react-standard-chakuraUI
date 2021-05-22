import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const histroy = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            histroy.push("/home");
            showMessage({ title: "ログインしました", status: "success" });
            setLoginUser({ ...res.data, isAdmin });
          } else {
            showMessage({
              title: "ユーザーが見つかりませんでした",
              status: "error"
            });
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [histroy, showMessage, setLoginUser]
  );
  return { login, loading };
};
