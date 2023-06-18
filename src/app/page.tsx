"use client"
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react'

export default function Main() {
  const [switcher, setSwitcher] = useState<boolean>(true)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!(data.get("nome") || data.get("telefone"))) {
      return;
    }
    console.log(data)
    setSwitcher(false)
  };
  return (
    <div className="h-screen w-screen flex flex-row">
      {/* left container */}
      <div className="h-full sm:w-[70%] md:w-[60%] lg:w-[50%] relative">
        <Image src="/cachorro.jpeg" fill alt="bg picture" />
      </div>
      {/* right container */}
      <div className="bg-zinc-50 h-full w-[100%] sm:w-[30%] md:w-[40%] lg:w-[50%] my-auto">
        {switcher 
          ?
            <Box component="form" onSubmit={handleSubmit} className='h-[80%] flex px-4 items-center flex-col justify-center'>
              <Typography component="h1" variant="h5" className="text-black">
                Falta pouco para o seu <span className="text-green-500 font-extrabold">DESCONTO!</span>
              </Typography>
              <TextField margin="normal" required fullWidth id="nome" label="Nome" name="nome" autoFocus />
              <TextField margin="normal" required fullWidth name="telefone" label="Telefone" type="text" id="telefone" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                className="bg-green-500 hover:bg-green-800"
              >Aproveitar o desconto!</Button>
            </Box>
          :
            <Box className='h-[80%] flex px-4 items-center flex-col justify-center'>
              <Typography className="text-2xl font-bold text-black">
                Falta só mais um passo para o seu desconto!
              </Typography>
              <Button
                 fullWidth
                 variant="contained"
                 className='bg-green-600 hover:bg-green-900'
                 sx={{ mt: 3, mb: 2 }}
                 onClick={() => window.location.assign('https://wa.link/2uijgz')}
               >
                 Entrar em contato
               </Button>
            </Box>
        }
        <div className='h-[20%] relative'>
          <Image src="/rodape.png" alt="rodapé" fill />
        </div>
      </div>
    </div>
  )
}