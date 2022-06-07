// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BookOutlinedSvg from '@ant-design/icons-svg/lib/asn/BookOutlined';

export interface BookOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BookOutlined: BookOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BookOutlinedSvg} />
    ;

BookOutlined.displayName = 'BookOutlined';

export default FunctionalComponent;