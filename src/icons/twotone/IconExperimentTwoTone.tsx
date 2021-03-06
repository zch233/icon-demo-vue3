// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExperimentTwoToneSvg from 'icon-base/es/asn/ExperimentTwoTone';

export interface ExperimentTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExperimentTwoTone: ExperimentTwoToneIconType = (props, context) => (
    <Icon name='ExperimentTwoTone' {...{ ...props, ...context.attrs }} icon={ExperimentTwoToneSvg} />
);

IconExperimentTwoTone.displayName = 'IconExperimentTwoTone';
IconExperimentTwoTone.theme = 'twotone';
IconExperimentTwoTone.originName = 'experiment';

export default IconExperimentTwoTone;
