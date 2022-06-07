// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import GifOutlinedSvg from '@ant-design/icons-svg/lib/asn/GifOutlined';

export interface GifOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const GifOutlined: GifOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={GifOutlinedSvg} />
    ;

GifOutlined.displayName = 'GifOutlined';

export default FunctionalComponent;