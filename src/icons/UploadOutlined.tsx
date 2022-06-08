// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/UploadOutlined';

export interface UploadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UploadOutlined: UploadOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={UploadOutlinedSvg} />;

UploadOutlined.displayName = 'UploadOutlined';

export default FunctionalComponent;