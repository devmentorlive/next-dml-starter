import Organization from '@/models/organization';
import dbMiddleware from './db';
import { getSubdomain } from '@/modules/location';
import nextConnect from 'next-connect';

export default function createHandler(...middlewares) {
  return nextConnect()
    .use(withOrganization)

    .use(dbMiddleware, ...middlewares);
}

async function withOrganization(req, res, next) {
  if (req.body) {
    const json = JSON.parse(req.body);
    const organization = await Organization.findOne({
      subdomain: getSubdomain(req.headers),
    }).exec();
    json['organization'] = organization._id;

    req.body = JSON.stringify(json);
  }

  return next();
}
