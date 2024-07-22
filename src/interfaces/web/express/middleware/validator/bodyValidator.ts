import z from 'zod';

const transaction = z.object({
  cliente: z.object({
    nome: z.string().min(3, 'Nome muito curto').max(100),
    identificacaoTipo: z.string().min(3).max(36),
    identificacao: z.string().min(3).max(36),
  }),
  //   pagamento: z.object({
  //     valor: z.number().positive(),
  //   }),
  //   localizacao: z.object({
  //     latitude: z.number(),
  //     longitude: z.number(),
  //   }),
});

export const validator = (req, res, next, type) => {
  transaction.parse(req.body);
  next();
};

export default {
  validator,
};

// export const yupObjectPagamentos = yup.object().shape({
//     cliente: yup.object().shape({
//         nome: yup.string().max(100).required(),
//         identificacao: yup.string().max(45).test(
//             'Identificacao_Invalida',
//             '${path} não está de acordo com o tipo de identificação informado',
//             (value, context) => {

//                 if (context.parent.identificacaoTipo === 'cpf') {
//                     return IsCpf(value)
//                 }

//                 if (context.parent.identificacaoTipo === 'cnpj') {
//                     return IsCnpj(value)
//                 }

//                 return true;
//             }
//         ).required(),
//         identificacaoTipo: yup.string().max(36).required(),
//         email: yup.string().email().max(100).required(),
//         dataNascimento: yup.string().ensure().test('data_invalida', '${path} não é uma data válida', (string) => {
//             if (string) { IsValid(string) }

//             return true;
//         }),
//     }),
//     pagamento: yup.object().shape({
//         valor: yup.number().integer().positive().required().typeError('${path} deve ser do tipo numérico.'),
//         tipo: yup.string().max(36).test('tipo_invalido', '${path} não é uma tipo válido', (string) => db.pagamentos.objetoProps.tipo.values.includes(string)).required(),
//         parcela: yup.string().length(36).required(),
//         plataforma: yup.string().max(36).test('tipo_invalido', '${path} não é uma tipo válido', (string) => db.pagamentos.objetoProps.plataforma.values.includes(string)).required(),
//         cartao: yup.object().shape({
//             numero: yup.string().min(13).max(19).test('numero_invalido', 'O número do cartão não é válido', (string) => /^[0-9]*$/gm.test(string)).required(),
//             nome: yup.string().max(50).required(),
//             dataExpiracao: yup.string().max(7).test('data_invalida', 'Data de expiração do cartão não é válida.', (string) => ValidarDataExpiracao(string)).required(),
//             codigoSeguranca: yup.string().min(3).max(4).test('cvv_invalido', '${path} não é um valor válido', (string) => /\\d{0}|\d{3,4}/.test(string)).required(),
//         }),
//     }),
//     localizacao: yup.object().shape({
//         latitude: yup.number(),
//         longitude: yup.number(),
//     })
// });
