// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import HomeOutlinedSvg from '@ant-design/icons-svg/lib/asn/HomeOutlined';

export interface HomeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HomeOutlined: HomeOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={HomeOutlinedSvg} />
    ;

HomeOutlined.displayName = 'HomeOutlined';

export default FunctionalComponent;