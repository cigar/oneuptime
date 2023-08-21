import slugify from 'slugify';
import Faker from './Faker';

export default class Slug {
    public static getSlug(name: string | null): string {
        if (name === null) {
            name = Faker.generateName();
        }

        name = String(name);
        if (!name || !name.trim()) {
            return '';
        }

        let slug: string = slugify(name, { remove: /[&*+~.,\\/()|'"!:@]+/g });
        slug = `${slug}-${Faker.randomNumbers(7)}`;
        slug = slug.toLowerCase();

        return slug;
    }
}
