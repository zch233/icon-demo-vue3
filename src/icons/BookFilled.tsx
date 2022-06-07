// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BookFilledSvg from '@ant-design/icons-svg/lib/asn/BookFilled';

export interface BookFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BookFilled: BookFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BookFilledSvg} />
    ;

BookFilled.displayName = 'BookFilled';

export default FunctionalComponent;