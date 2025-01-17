import { Button, Input } from "rsuite";

export default function Login() {
  return <div>
    <Input placeholder="email" />
    <Input type="password" placeholder="password" />
    <Button appearance="primary">Login</Button>
  </div>
}