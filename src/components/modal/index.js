import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1040,
  bgcolor: '#053050',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: '104px 56px'
};

function ModalCustom({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Grid container>
                <Grid item md={6}  paddingRight="20px">
                    <Typography variant="h4" color="#F4FDFF" marginBottom="24px">
                        Invista em Mídia Paga e Promova seu Negócio
                    </Typography>
                    <Typography variant="body1" marginBottom="24px">
                        Esse post é para você que tem um negócio e quer obter mais clientes, vender mais, 
                        aumentar seu delivery ou lotar sua agenda. 📈✅ 
                    </Typography>
                    <Typography variant="body1" marginBottom="24px">
                        Há uma oportunidade fazer isso com anúncios online, e só anunciando para a 
                        pessoa certa e no momento você consegue, quer dizer conseguimos juntos. 😄 
                    </Typography>
                    <Typography variant="body1" marginBottom="24px">
                        Pensa que investir em propaganda e publicidade precisa investir muito como as 
                        grandees empresas ?Através de campanhas patrocinadas no Facebook e Instagram, atualmente a maior rede social do mundo, é ideal para gerar demanda. 📢 (investindo pouco) 
                    </Typography>
                    <Typography variant="body1">
                        Quer gerar mais negócios para sua empresa? Entre em contato comigo no direct e
                        vamos analisar como as redes sociais podem ajudar seu negócio!
                    </Typography>
                </Grid>
                <Grid item md={6} paddingLeft="20px" display="flex" justifyContent="center">
                    <img src="./images/modal_img.svg" alt="" />
                </Grid>
            </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalCustom;
