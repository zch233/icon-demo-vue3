// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CloseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseCircleFilled';

export interface CloseCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CloseCircleFilled: CloseCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CloseCircleFilledSvg} />;

CloseCircleFilled.displayName = 'CloseCircleFilled';

export default FunctionalComponent;