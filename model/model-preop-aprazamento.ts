import * as mongoose from 'mongoose'


export interface PreOperacaoAprazamento extends mongoose.Document {
    //Dados do Aprazamento
    status: boolean,
    cdProntuario: Number,
    cdAtendimento: Number,
    cdPrescricao: Number,
    dtPreOpAprazamento: Date,
    horarioInicial: Date,
    intervalo: Date,
    //Dados do medicamento Aprazado
    cdItem: Number,
    cdTpItem: Number,
    ordemItem: Number,
    quantidade: Number
  }

const preOperacaoAprazamentoSchema = new mongoose.Schema({
  //Dados do Aprazamento
      status:{
        type: Date,
        required: false,
      },

      cdProntuario: {
        type: Number,
        required:  true
      },
    
      cdAtendimento: {
        type: Number,
        required:  true
      },

      cdPrescricao: {
        type: Number,
        required:  true
      },

      dtPreOpAprazamento: {
        type: Date,
        required: true
      },
      
      horarioInicial: {
        type: Date,
        required: true
      },

      intervalo: {
        type: Date,
        required: true
      },

  //Dados do medicamento que foi aprazado
    cdItem: {
      type: Number,
      required:  true
    },
      
    cdTpItem: {
      type: Number,
      required:  true
    },
     
    ordemItem: {
      type: Number,
      required:  true
    },
    
    quantidade: {
      type: Number,
      required:  true
    }
    
})

export const PreOperacaoAprazamento = mongoose.model<PreOperacaoAprazamento>('PreOperacaoAprazamento', preOperacaoAprazamentoSchema)