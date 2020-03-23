/*
 * This file is part of the MasterMind project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright andc license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Article from "../Models/Article";
import { ArticleInterface } from "../Interfaces/ArticleInterface";
import { SessionInterface } from "../Interfaces/SessionInterface";

/**
 * @desc Where to redirect users after submitting form.
 * @type {string}
 */
const redirectTo: string = "/articles";

/**
 * @public
 * @desc Display a listing of the resource.
 * @function
 * @name index
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
const index = async function(req: Request, res: Response): Promise<void> {
  const article = await Article.find({})
    .populate("userId", "updatedAt username email")
    .exec();
  return res.status(200).render("Articles", { article });
};

/**
 * @public
 * @desc Show the form for creating a new resource.
 * @function
 * @name index
 * @param {SessionInterface} req
 * @param {Response} res
 * @returns {void}
 */
const create = function(req: SessionInterface, res: Response): void {
  return res.status(200).render("Editor", {
    csrfToken: req.csrfToken(),
    flash: req.flash()
  });
};

/**
 * @public
 * @desc Display the specified resource.
 * @function
 * @name index
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
const show = async function(req: Request, res: Response): Promise<void> {
  const { id } = req.query;
  const article = await Article.findOne({ _id: id })
    .populate("userId", "updatedAt username email")
    .exec();
  return res.status(200).render("Article", { article });
};

/**
 * @public
 * @desc Store the specified resource in storage.
 * @function
 * @name index
 * @param {SessionInterface} req
 * @param {Response} res
 * @returns {void}
 */
const store = function(req: SessionInterface, res: Response): void {
  const { content, title, status = true }: ArticleInterface = { ...req.body };
  // Finds the validation errors in this request and wraps them in an object with handy functions
  if (!validationResult(req).isEmpty)
    throw new TypeError("The given inputs was Invalid");
  // Create a new Instance.
  const attemptCreateArticle = new Article({
    content,
    title,
    status,
    userId: req.session.user_id_token
  }).save();
  if (!attemptCreateArticle) throw new TypeError("Oops something went wrong");
  return res.status(201).redirect(redirectTo);
};

export default { index, create, show, store };
