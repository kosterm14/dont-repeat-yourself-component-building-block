import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
    let query = gql`
        query VisualThinking() {
            methods(first: 100) {
                    id
                    slug
                    title
            categories {
    	            title
                    }
            template {
    	            url(transformation: {document: {output: {format: webp}}})
                    height
                    width
                    }
    }
}

    `;

    return await hygraph.request(query);
}