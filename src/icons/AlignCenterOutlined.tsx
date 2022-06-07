// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AlignCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignCenterOutlined';

export interface AlignCenterOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AlignCenterOutlined: AlignCenterOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AlignCenterOutlinedSvg} />
    ;

AlignCenterOutlined.displayName = 'AlignCenterOutlined';

export default FunctionalComponent;