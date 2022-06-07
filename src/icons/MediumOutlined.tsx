// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MediumOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumOutlined';

export interface MediumOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MediumOutlined: MediumOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MediumOutlinedSvg} />
    ;

MediumOutlined.displayName = 'MediumOutlined';

export default FunctionalComponent;