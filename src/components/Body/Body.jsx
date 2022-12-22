import { Grid } from '@mui/material';
import './Body.css';
import globo from '../../assets/img/globinho.png';
import tela from '../../assets/img/tela.png';

function Body() {
    return(
        <Grid container className='Body' xs={12}>

            <Grid className='left-side' xs={6}>

                <Grid className='title'>
                    <p className='title1'>Onde estiver, quando quiser.</p>
                </Grid>

                <Grid className='sub-title' xs={10}>
                    <p className='sub-title1'>
                        Chegamos para revolucionar o conceito de mobilidade, seja um beta tester e receba benefícios exclusivos!
                    </p>
                </Grid>

                <Grid className='title-input'>
                    <p className='title-input1'>
                        Digite seu e-mail abaixo e entre na fila de espera:
                    </p>
                </Grid>

                <Grid className='cta-box' xs={8}>
                    <Grid className='cta-email-bg'>
                        <input type='text' className='cta-email' placeholder='e-mail' />
                    </Grid>
                    <Grid className='done-button-bg' xs={4}>
                        <p className='done-button'>Continuar</p>
                    </Grid>
                </Grid>

                <Grid className='full-space'>
                    <p className='space'> </p>
                </Grid>

            </Grid>

            <Grid className='right-side' xs={6}>
                <img className='mundo' src={globo} alt="mundo" />
                
                <Grid className='cellphone'>
                        <img className='screen' src={tela} alt="tela app" />
                </Grid>

                <Grid className='world' xs={6}>
                    
                </Grid>

                
            </Grid>

        </Grid>
    )
}

export default Body;