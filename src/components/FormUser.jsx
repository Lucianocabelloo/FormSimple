import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import { useState } from 'react';
import {  useForm } from "react-hook-form"
import { useEffect } from 'react';
import Usuario from '../utils/FormClass';
import uuid4 from "uuid4";
import { FormList } from './FormList';


export default function BasicModalDialog() {
  
  const initialUser = JSON.parse( localStorage.getItem("User")) || [];

  const [User, setUser] = useState(initialUser)

    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
      const newUser = new Usuario(uuid4(), data.Nombre, data.Apellido, data.Email, data.DNI, data.Description);
      setUser([...User, newUser]); 
    }

    useEffect(() => {
      localStorage.setItem("User", JSON.stringify(User))
    }, [User]);



  console.log(User)

  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
        className=" addBtn"
      >
        Create New member
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create new Member</DialogTitle>
          <DialogContent>Fill in the information of the Member.</DialogContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input {...register("Nombre")} autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Apellido</FormLabel>
                <Input {...register("Apellido")} required />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input {...register("Email")} required />
              </FormControl>
              <FormControl>
                <FormLabel>DNI</FormLabel>
                <Input {...register("DNI")} required />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input {...register("Description")} required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      <FormList user={User}/>
    </React.Fragment>
  );
}