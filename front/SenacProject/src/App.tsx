import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { ItensData } from './interface/ItensData';
import { useItensData } from './hooks/useItensData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useItensData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(itensData => 
          <Card
            price={itensData.price} 
            title={itensData.title} 
            image={itensData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App