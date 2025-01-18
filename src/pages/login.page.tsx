import { useObservable } from "@ngneat/react-rxjs";
import { Button, Input } from "rsuite";
import { GetUserRepo } from "../store/user.store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [loading] = useObservable(GetUserRepo().loginLoading$)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (GetUserRepo().GetIsLogin()) navigate("/")
  }, [])

  function onClick() {
    GetUserRepo().Login(email, password).then(() => {
      navigate("/")
    })
  }

  return <div>
    <Input placeholder="email" onChange={(v) => setEmail(v)} value={email} />
    <Input type="password" placeholder="password" onChange={(v) => setPassword(v)} value={password} />
    <Button appearance="primary" loading={loading} onClick={onClick}>Login</Button>
  </div>
}