// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SisternodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SisternodeOutlined';

export interface SisternodeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SisternodeOutlined: SisternodeOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SisternodeOutlinedSvg} />
    ;

SisternodeOutlined.displayName = 'SisternodeOutlined';

export default FunctionalComponent;