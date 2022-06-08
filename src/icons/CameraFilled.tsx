// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CameraFilledSvg from '@ant-design/icons-svg/lib/asn/CameraFilled';

export interface CameraFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CameraFilled: CameraFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CameraFilledSvg} />;

CameraFilled.displayName = 'CameraFilled';

export default FunctionalComponent;