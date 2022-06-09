// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ExperimentTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExperimentTwoTone';

export interface ExperimentTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ExperimentTwoTone: ExperimentTwoToneIconType = (props, context) => <Icon name='ExperimentTwoTone' {...{ ...props, ...context.attrs }} icon={ExperimentTwoToneSvg} />;

ExperimentTwoTone.displayName = 'ExperimentTwoTone';

export default ExperimentTwoTone;