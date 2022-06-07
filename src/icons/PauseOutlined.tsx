// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PauseOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseOutlined';

export interface PauseOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PauseOutlined: PauseOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PauseOutlinedSvg} />
    ;

PauseOutlined.displayName = 'PauseOutlined';

export default FunctionalComponent;