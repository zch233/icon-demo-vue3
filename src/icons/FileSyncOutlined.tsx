// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FileSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSyncOutlined';

export interface FileSyncOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FileSyncOutlined: FileSyncOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FileSyncOutlinedSvg} />;

FileSyncOutlined.displayName = 'FileSyncOutlined';

export default FunctionalComponent;