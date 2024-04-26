import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button, Divider, Typography } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

const initialFormData = {
  CHK_ACCT: ['0DM', 'less-200DM', 'no-account', 'over-200DM'],
  Duration: 0,
  History: ['all-paid-duly', 'bank-paid-duly', 'critical', 'delay', "duly-till-now"],
  Purpose_of_credit: ['bussiness', 'domestic-app', 'education', 'furniture', 'new-car', 'others', 'radio-tv', 'repairs', 'retraining', 'used-car'],
  Credit_Amount: 0,
  Balance_in_Savings_AC: ['less 1000DM', 'less 100DM', 'less 500DM', 'over 1000DM', 'unknown'],
  Employment: ['four-years', 'one-year', 'over-seven', 'seven-years', 'unemployed'],
  Install_Rate: 0,
  Marital_status: ['female-divorced', 'male-divorced', 'married-male', 'single-male'],
  Co_Applicant: ['co-applicant', 'guarantor', 'none'],
  Present_Resident: 0,
  Real_Estate: ['building-society', 'car', 'none', 'real-estate'],
  Age: 0,
  Other_installment: ['bank', 'none', 'stores'],
  Residence: ['free', 'own', 'rent'],
  Num_Credits: 0,
  Job: ['management', 'skilled', 'unskilled-resident', 'unemployed-non-resident'],
  No_Dependents: 0,
  Phone: ['yes', 'no'],
  Foreign: ['no', 'yes'],
};

const StyledForm = styled('form')({
  padding: '2rem',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
});

const StyledSubmitButton = styled(Button)({
  marginTop: '2rem',
  width: '5rem',
  marginLeft: '48%',
  borderRadius: '4px',
  textTransform: 'none',
});

const StyledDivider = styled(Divider)({
  margin: '2rem 0',
  backgroundColor: '#1976d2',
});

const FormHeading = styled(Typography)({
  marginBottom: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
});

const FormField = styled(Grid)({
  marginBottom: '1.5rem',
});

const PredictionText = styled(Typography)({
  textAlign: 'center',
  fontWeight: 'bold',
  marginTop: '1rem',
});

const MyForm = () => {
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call prediction function here, for now, assuming prediction is "good"
    setPrediction('Good');
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledForm onSubmit={handleSubmit}>
        <FormHeading variant="h4" gutterBottom>
          CREDIT RATING
        </FormHeading>
        <Grid container spacing={3} maxWidth={"80%"} marginX={"auto"}>
          {Object.keys(initialFormData).map((key, index) => (
            <FormField item xs={12} sm={6} md={4} key={index}>
              {Array.isArray(initialFormData[key]) ? (
                <TextField
                  fullWidth
                  select
                  label={key.replace(/_/g, ' ')}
                  name={key}
                  value={formData[key] || ''}
                  onChange={handleChange}
                  variant="outlined"
                >
                  {initialFormData[key].map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                  ))}
                </TextField>
              ) : (
                <TextField
                  fullWidth
                  type="number"
                  label={key.replace(/_/g, ' ')}
                  name={key}
                  value={formData[key] || ''}
                  onChange={handleChange}
                  variant="outlined"
                />
              )}
            </FormField>
          ))}
        </Grid>
        <StyledDivider />
        <StyledSubmitButton type="submit" variant="contained" color="primary">
          Submit
        </StyledSubmitButton>
        {prediction && (
          <PredictionText variant="h5" gutterBottom>
            Prediction: {prediction}
          </PredictionText>
        )}
      </StyledForm>
    </ThemeProvider>
  );
};

export default MyForm;