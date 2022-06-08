// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ExportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExportOutlined';

export interface ExportOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ExportOutlined: ExportOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ExportOutlinedSvg} />;

ExportOutlined.displayName = 'ExportOutlined';

export default ExportOutlined;