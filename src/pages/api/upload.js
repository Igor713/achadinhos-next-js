import multer from 'multer';

// Configurando o multer
const upload = multer({
  dest: 'uploads/', // Diretório onde os arquivos serão salvos
  limits: {
    fileSize: 10 * 1024 * 1024, // Limite de 10MB para o tamanho do arquivo
  },
  fileFilter: (req, file, cb) => {
    // Filtra para aceitar apenas arquivos de áudio
    const filetypes = /mp3|wav|ogg/; // Tipos de arquivos permitidos
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      file.originalname.split('.').pop().toLowerCase(),
    );

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Apenas arquivos de áudio são permitidos!'));
  },
});

// O handler padrão da API
export default function handler(req, res) {
  // Usando o multer diretamente
  upload.single('audio')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    // O arquivo de áudio estará disponível em req.file
    if (req.file) {
      console.log(req.file); // Aqui você pode ver as informações do arquivo de áudio
      res
        .status(200)
        .json({ message: 'Arquivo recebido com sucesso!', file: req.file });
    } else {
      res.status(400).json({ error: 'Nenhum arquivo enviado!' });
    }
  });
}

// Configuração da API
export const config = {
  api: {
    bodyParser: false, // Desabilita o bodyParser para permitir o multer processar o upload
  },
};
