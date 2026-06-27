// services/api.js
const API_CLIENTE_URL = 'https://6a39d317917c7b14c74c54dc.mockapi.io/barbearia/api/v1/cliente';
const API_BARBEIRO_URL = 'https://6a39d317917c7b14c74c54dc.mockapi.io/barbearia/api/v1/barbeiro';

export const api = {
  // ========== CLIENTES ==========
  getClientes: async () => {
    try {
      const response = await fetch(API_CLIENTE_URL);
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      return [];
    }
  },

  loginCliente: async (user, senha) => {
    try {
      const clientes = await api.getClientes();
      return clientes.find(c => c.user === user && c.senha === senha) || null;
    } catch (error) {
      console.error('Erro no login do cliente:', error);
      return null;
    }
  },

  // ========== BARBEIROS ==========
  getBarbeiros: async () => {
    try {
      const response = await fetch(API_BARBEIRO_URL);
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar barbeiros:', error);
      return [];
    }
  },

  loginBarbeiro: async (user, senha) => {
    try {
      const barbeiros = await api.getBarbeiros();
      return barbeiros.find(b => b.user === user && b.senha === senha) || null;
    } catch (error) {
      console.error('Erro no login do barbeiro:', error);
      return null;
    }
  },

  // ========== CADASTRO ==========
  cadastrarCliente: async (dadosCliente) => {
    try {
      const response = await fetch(API_CLIENTE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosCliente),
      });
      
      if (!response.ok) {
        throw new Error('Falha ao cadastrar cliente na MockAPI');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      return null;
    }
  }
};