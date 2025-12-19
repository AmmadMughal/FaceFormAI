import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#FAFAFB',
        
        p: 2
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: {
            xs: '90%',
            sm: '400px',
            md: '500px'
          },
          height: {
            xs: 'auto',
            sm: '500px',
            md: '600px'
          },
          p: {
            xs: 2,
            sm: 3,
            md: 4
          },
          borderRadius: 3,
          backgroundColor: 'white',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          display: 'flex',
          borderColor: '#1b5e20',
          flexDirection: 'column',
          justifyContent: 'center'
          
        }}
      >
        <Typography 
          variant={{
            xs: 'h5',
            sm: 'h4'
          }} 
          component="h1" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            color: '#1b5e20',
            mb: 3
          }}
        >
          Contact Us
        </Typography>
        
        <Typography 
          variant="body1" 
          align="center" 
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Fill out the form below and we&apos;ll get back to you soon
        </Typography>

        <Stack spacing={3}>
          <TextField
            id="name-field"
            label="Full Name"
            variant="outlined"
            fullWidth
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '&:hover fieldset': {
                  borderColor: '#1b5e20',
                },
              },
            }}
          />
          
          <TextField
            id="email-field"
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth 
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '&:hover fieldset': {
                  borderColor: '#1b5e20',
                },
              },
            }}
          />
          
          <TextField
            id="message-field"
            label="Your Message"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                '&:hover fieldset': {
                  borderColor: '#1b5e20',
                },
              },
            }}
          />

          <Button
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 2,
              backgroundColor: '#1b5e20',
              '&:hover': {
                backgroundColor: '#2e7d32',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
              },
              transition: 'all 0.3s ease',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
            fullWidth
          >
            Send Message
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}