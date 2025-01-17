import { useObservable } from "@ngneat/react-rxjs";
import { Button, Input } from "rsuite";
import { GetUserStore } from "../store/user.store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [loading] = useObservable(GetUserStore().loginLoading$)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function onClick() {
    GetUserStore().Login(email, password).then(() => {
      navigate("/")
    })
  }

  return <div>
    <Input placeholder="email" onChange={(v) => setEmail(v)} value={email} />
    <Input type="password" placeholder="password" onChange={(v) => setPassword(v)} value={password} />
    <Button appearance="primary" loading={loading} onClick={onClick}>Login</Button>
  </div>
}