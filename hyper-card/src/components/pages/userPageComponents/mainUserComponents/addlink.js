import {
    Typography,
    Box,
    Grid,
    TextField,
    Button
} from '@mui/material';

export const AddLink = (props) => {
    const { userCards , setUserCards } = props;
    let title = "";
    let url = "";
    let tempUserCards = [];

    return ( 
            <Grid container>
                <Grid item xs={12} marginLeft={'10%'} marginTop={5}>
                    <Typography variant='h4' marginLeft={4}>
                        Title
                    </Typography>
                    <Box display='flex' sx={{
                            border: 2,
                            borderRadius: '35px',
                            marginRight: 10,
                            width: '80%'
                    }}>
                            <TextField variant='standard' onChange={(event) => {title = event.target.value}} InputProps={{ disableUnderline: true }} placeholder={'enter title of url here'} sx = {{
                                fontStyle: 'bold',
                                color: `black`,
                                width: '100%',
                                marginLeft: 1
                                }}>
                                
                            </TextField>
                    </Box>   
                </Grid>
                <Grid item xs={12} marginLeft={'10%'}>
                    <Typography variant='h4' marginLeft={4}>
                        Url
                    </Typography>
                    <Box display='flex' sx={{
                            border: 2,
                            borderRadius: '35px',
                            marginRight: 10,
                            width: '80%'
                    }}>
                            <TextField variant='standard' onChange={(event) => {url = event.target.value}} InputProps={{ disableUnderline: true }} placeholder={'://'} sx = {{
                                fontStyle: 'bold',
                                color: `black`,
                                width: '100%',
                                marginLeft: 1
                                }}>
                                
                            </TextField>
                    </Box>   
                </Grid>
                <Grid item xs={6} bottom={0} left={'12px'} position={'absolute'} >
                    <Button variant='contained' onClick={()=>{
                                                if(url == "" || title == ""){
                                                    console.log("no");
                                                    return;
                                                }
                                                tempUserCards = [{"type": "link",
                                                                "url": url,
                                                                "title": title
                                                                }, ...userCards];
                                                setUserCards(tempUserCards);
                                                console.log(url);
                                                console.log(title);
                                                }} 
                        sx={{
                            width:'100px',
                            height:'44px',
                            background:'#000000',
                            border:'2px solid #000000',
                            borderRadius:'35px',
                            marginBottom: '16px',
                            ":hover": {bgcolor: "#000000"}
                        }} style={{
                            fontFamily:'Outfit', fontWeight:'700'
                        }}>
                        confirm
                    </Button>
                </Grid>
                <Grid item xs={6} bottom={0} right={'12px'} position={'absolute'}>
                    <Button variant='contained' sx={{
                            width:'100px',
                            height:'44px',
                            background:'#ffffff',
                            border:'2px solid #000000',
                            borderRadius:'35px',
                            marginBottom: '16px',
                            ":hover": {bgcolor: "#ffffff"}
                        }} style={{
                            color:'#000000', fontFamily:'Outfit', fontWeight:'700'
                        }}>
                        cancel
                    </Button>
                </Grid>
            </Grid>
    )
}

export const DisplayLink = (props) => {
    const {card} = props;

    return(
        <Box display={"flex"} justifyContent={"center"}>
            <Box justifyContent={"center"} sx={{
                borderColor: "black",
                border: 2
            }}>
                {card["title"]}
            </Box>
        </Box>
    )

}