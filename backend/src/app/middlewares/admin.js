export default async (req, res, next) => {
  // console.log(req.isAdmin);

  if (!req.isAdmin) {
    return res.status(401).json({
      error: "Usuário precisa ser administrador para cadastrar destinatário"
    });
  }

  return next();
};
