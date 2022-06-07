// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ExperimentTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExperimentTwoTone';

export interface ExperimentTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ExperimentTwoTone: ExperimentTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ExperimentTwoToneSvg} />
    ;

ExperimentTwoTone.displayName = 'ExperimentTwoTone';

export default FunctionalComponent;