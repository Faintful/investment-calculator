import './InvestmentForm.css';
import InvestmentDataContainer from './investment_data_container/InvestmentDataContainer';
import { useState } from 'react';
import FormActions from './form_actions/FormActions';

class Metadata {
  constructor(name, id, tag) {
    this.name = name;
    this.id = id;
    this.tag = tag;
  }
}

const initialState = {
  currentSavings: 0,
  yearlyContribution: 0,
  expectedReturn: 0,
  duration: 0,
};

export default function InvestmentForm({calculateHandler}) {

  const [formState, setFormState] = useState(initialState);

  const onUpdateHandler = ({ target: { name, value } }) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    calculateHandler(formState)
  }

  return (
    <form onSubmit={submitHandler} className='form'>
      <InvestmentDataContainer
        onUpdate={onUpdateHandler}
        metadata={[
          new Metadata(
            'Current Savings ($)',
            'current-savings',
            'currentSavings'
          ),
          new Metadata(
            'Yearly Savings ($)',
            'yearly-contribution',
            'yearlyContribution'
          ),
        ]}
      />
      <InvestmentDataContainer
        onUpdate={onUpdateHandler}
        metadata={[
          new Metadata(
            'Expected Interest (%, per year)',
            'expected-return',
            'expectedReturn'
          ),
          new Metadata('Investment Duration (years)', 'duration', 'duration'),
        ]}
      />
      <FormActions />
    </form>
  );
}
